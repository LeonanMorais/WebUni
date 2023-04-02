//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Leonan Dias De Morais - 2110744
//DATA: 30/03/2023

import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // Estado do tabuleiro com um array de 9 elementos, inicialmente todos nulos
  const [player, setPlayer] = useState('X'); // Estado do jogador atual, inicialmente 'X'

  // Função para verificar se houve um vencedor
  const checkWinner = (board) => {
    // Array com todas as possíveis linhas, colunas e diagonais vencedoras
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Loop pelas possíveis linhas, colunas e diagonais vencedoras
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // Verifica se há três X ou três O em uma linha, coluna ou diagonal
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Retorna X ou O, dependendo de quem ganhou
      }
    }
    return null; // Retorna nulo se não houve vencedor
  };

  // Função para lidar com o clique em um quadrado
  const handleClick = (index) => {
    const newBoard = [...board]; // Cria uma cópia do tabuleiro atual
    if (newBoard[index] || checkWinner(newBoard)) {
      return; // Retorna se o quadrado já foi preenchido ou se já há um vencedor
    }
    newBoard[index] = player; // Preenche o quadrado com o jogador atual
    setBoard(newBoard); // Atualiza o estado do tabuleiro
    setPlayer(player === 'X' ? 'O' : 'X'); // Alterna o jogador atual
  };

  // Variável que armazena o status do jogo
  const winner = checkWinner(board);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every((square) => square !== null)) {
    status = 'Draw';
  } else {
    status = `Next player: ${player}`;
  }

  // Renderização do componente
  return (
    <div className="tic-tac-toe">
      <div className="board">
        {board.map((square, index) => (
          <div key={index} className="square" onClick={() => handleClick(index)}>
            {square}
          </div>
        ))}
      </div>
      <div className="status">{status}</div>
    </div>
  );
};

export default TicTacToe;