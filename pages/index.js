'use strict';

import Link from 'next/link'
import Layout from 'components/Layout'

export default function Home() {
  return (
    <Layout>
      <h1>
        Tic-Tac-Toe Toy Problem
      </h1>

      <p>
        The challenge is to implement Tic-Tac-Toe and a made-up game called Mega-Tic-Tac-Toe using common code.
      </p>

      <h2>App requirements:</h2>
      <ul>
        <li>The game will have 2 players: a single human player and a single “AI” player (it will never be human vs human or AI vs AI). The human player will select each move by providing input to the UI. The “AI” player should use trivial logic to choose one of the legal spaces arbitrarily.</li>
        <li>After each move, the board in the UI should update to display its current state. It should be an NxN board of squares. Each square should make it clear which of the 3 different states it’s in: empty, occupied by Player 1, occupied by player 2.</li>
        <li>Display a representation of whether the game is active or complete. If the game is complete, display a string for the winner.</li>
        <li>The app should be self-contained as a client app with no internet connection required, and there should be no server-side code.</li>
      </ul>

      <h2>Common to all games:</h2>
      <ul>
        <li>There are two players. Each player takes turns claiming one space per turn.</li>
        <li>A "connection" is noted to be any contiguous set of spaces that are all claimed by the same player.</li>
        <li>The directions allowed for a "connection" vary by game (see relevant bullet of each game listed below).</li>
        <li>If the last open square on the board fills up and there’s no "connection", then the game is over and there is no winner. It is not necessary to end the game early with no winner before the board fills up if it’s impossible for anyone to win.</li>
      </ul>

      <h2>Game-specific rules:</h2>
      <ul>
        <li>
          Tic-Tac-Toe
          <ul>
            <li>"Connection" length: 3</li>
            <li>Board size: 3x3</li>
            <li>Acceptable "connection" directions: top-to-bottom, left-to-right, diagonally up-and-to-the-right, diagonally up-and-to-the-left.</li>
            <li>Acceptable spaces: any available space that is not claimed already.</li>
          </ul>
        </li>
        <li>
          Mega-Tic-Tac-Toe
          <ul>
            <li>"Connection" length: 4</li>
            <li>Board size: 8x8</li>
            <li>Acceptable "connection" directions: top-to-bottom, left-to-right.</li>
            <li>Acceptable spaces: any available space that is not claimed already.</li>
          </ul>
        </li>
      </ul>

      <h2>Links:</h2>
      <ul>
        <li><Link href='https://www.figma.com/file/MHWOCg0hov87XPlRRd0uU2/FE-Coding-Challenge?node-id=0%3A1'><a>Design File</a></Link></li>
        <li>Games:
          <ul>
            <li><Link href='/tic-tac-toe'><a>Tic-Tac-Toe</a></Link></li>
            <li><Link href='/mega-tic-tac-toe'><a>Mega Tic-Tac-Toe</a></Link></li>
          </ul>
        </li>
      </ul>
    </Layout>
  )
}
