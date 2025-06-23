import React from 'react';
import ProgressBar from "../../components/ProgressBar";
import CodeBlock from "../../components/CodeBlock";

export default function Project08Solution() {
  return (
    <div className="lesson-container">
      <ProgressBar />

      <section>
        <h1>Project: Music Playlist Manager</h1>
        <p>Your task is to "reverse engineer" and write the code for a music playlist manager, given the output of the program when it was run by a user. The person who wrote this code was given the following instructions:</p>
        <p>
          <em>Welcome to the Music Playlist Manager project! In this project, you'll create a Python program that allows you to manage a list of your favorite songs.
            You'll be able to add songs, remove them, view your playlist, and even move a song to the top of your listening queue.</em>
        </p>

        <p>Note that in addition to the core functionality of the program, there is also error handling in place to prevent the user from entering invalid input.</p>

        <h3>Code Output</h3>
        <CodeBlock language="txt" codeString={`Music Playlist Manager
============================
1. View Playlist
2. Add Song
3. Remove Song
4. Move Song to Front
5. Clear Playlist
6. Exit
============================
Enter your choice (1-6): 1

--- Your Playlist ---
Your playlist is currently empty.
---------------------

Music Playlist Manager
============================
1. View Playlist
2. Add Song
3. Remove Song
4. Move Song to Front
5. Clear Playlist
6. Exit
============================
Enter your choice (1-6): 3
Your playlist is empty. Nothing to remove.

Music Playlist Manager
============================
1. View Playlist
2. Add Song
3. Remove Song
4. Move Song to Front
5. Clear Playlist
6. Exit
============================
Enter your choice (1-6): 4
Playlist must have at least two songs to perform a move.

Music Playlist Manager
============================
1. View Playlist
2. Add Song
3. Remove Song
4. Move Song to Front
5. Clear Playlist
6. Exit
============================
Enter your choice (1-6): 5
Playlist is already empty.

Music Playlist Manager
============================
1. View Playlist
2. Add Song
3. Remove Song
4. Move Song to Front
5. Clear Playlist
6. Exit
============================
Enter your choice (1-6): 2
Enter the name of the song to add: 
Invalid input. Please enter at least one character for the song name.
Enter the name of the song to add: High Hopes
'High Hopes' has been added to your playlist.

Music Playlist Manager
============================
1. View Playlist
2. Add Song
3. Remove Song
4. Move Song to Front
5. Clear Playlist
6. Exit
============================
Enter your choice (1-6): 1

--- Your Playlist ---
1. High Hopes
---------------------

Music Playlist Manager
============================
1. View Playlist
2. Add Song
3. Remove Song
4. Move Song to Front
5. Clear Playlist
6. Exit
============================
Enter your choice (1-6): 2
Enter the name of the song to add: Long Live
'Long Live' has been added to your playlist.

Music Playlist Manager
============================
1. View Playlist
2. Add Song
3. Remove Song
4. Move Song to Front
5. Clear Playlist
6. Exit
============================
Enter your choice (1-6): 1

--- Your Playlist ---
1. High Hopes
2. Long Live
---------------------

Music Playlist Manager
============================
1. View Playlist
2. Add Song
3. Remove Song
4. Move Song to Front
5. Clear Playlist
6. Exit
============================
Enter your choice (1-6): 2
Enter the name of the song to add: Somewhere Over The Rainbow
'Somewhere Over The Rainbow' has been added to your playlist.

Music Playlist Manager
============================
1. View Playlist
2. Add Song
3. Remove Song
4. Move Song to Front
5. Clear Playlist
6. Exit
============================
Enter your choice (1-6): 1

--- Your Playlist ---
1. High Hopes
2. Long Live
3. Somewhere Over The Rainbow
---------------------

Music Playlist Manager
============================
1. View Playlist
2. Add Song
3. Remove Song
4. Move Song to Front
5. Clear Playlist
6. Exit
============================
Enter your choice (1-6): 3

--- Select a Song to Remove ---
1. High Hopes
2. Long Live
3. Somewhere Over The Rainbow
-------------------------------
Enter the number of the song to remove: e
Invalid input. Please enter a number.
Enter the number of the song to remove: 9
Invalid song number. Please try again.
Enter the number of the song to remove: 3
Removed 'Somewhere Over The Rainbow' from your playlist.

Music Playlist Manager
============================
1. View Playlist
2. Add Song
3. Remove Song
4. Move Song to Front
5. Clear Playlist
6. Exit
============================
Enter your choice (1-6): 1

--- Your Playlist ---
1. High Hopes
2. Long Live
---------------------

Music Playlist Manager
============================
1. View Playlist
2. Add Song
3. Remove Song
4. Move Song to Front
5. Clear Playlist
6. Exit
============================
Enter your choice (1-6): 4

--- Select a Song to Move ---
1. High Hopes
2. Long Live
-----------------------------
Enter the number of the song to move to the front: x
Invalid input. Please enter a number.
Enter the number of the song to move to the front: 5
Invalid song number. Please try again.
Enter the number of the song to move to the front: 2
'Long Live' has been moved to the front.

Music Playlist Manager
============================
1. View Playlist
2. Add Song
3. Remove Song
4. Move Song to Front
5. Clear Playlist
6. Exit
============================
Enter your choice (1-6): 1

--- Your Playlist ---
1. Long Live
2. High Hopes
---------------------

Music Playlist Manager
============================
1. View Playlist
2. Add Song
3. Remove Song
4. Move Song to Front
5. Clear Playlist
6. Exit
============================
Enter your choice (1-6): 5
All songs have been cleared from the playlist.

Music Playlist Manager
============================
1. View Playlist
2. Add Song
3. Remove Song
4. Move Song to Front
5. Clear Playlist
6. Exit
============================
Enter your choice (1-6): 1

--- Your Playlist ---
Your playlist is currently empty.
---------------------

Music Playlist Manager
============================
1. View Playlist
2. Add Song
3. Remove Song
4. Move Song to Front
5. Clear Playlist
6. Exit
============================
Enter your choice (1-6): 6
Exiting playlist manager. Goodbye and happy listening! `} />
      </section>
    </div>
  );
}