# 1. Initialize an empty list to store the songs in the playlist.
playlist = []

# 2. Start an infinite loop to keep the program running until the user decides to exit.
while True:
    # 3. Display the main menu to the user in each iteration.
    print("\n🎵 Music Playlist Manager 🎵")
    print("============================")
    print("1. View Playlist")
    print("2. Add Song")
    print("3. Remove Song")
    print("4. Move Song to Front")
    print("5. Clear Playlist")
    print("6. Exit")
    print("============================")

    # 4. Get the user's choice from the menu.
    choice = input("Enter your choice (1-6): ")

    # --- VIEW PLAYLIST ---
    if choice == '1':
        print("\n--- Your Playlist ---")
        # Check if the playlist is empty.
        if not playlist:
            print("Your playlist is currently empty.")
        else:
            # If not empty, display each song with its number.
            for i, song in enumerate(playlist, 1):
                print(f"{i}. {song}")
        print("---------------------")

    # --- ADD SONG ---
    elif choice == '2':
        # Get the new song's name from the user.
        while True:
          song_name = input("Enter the name of the song to add: ")

          if song_name != "":
            # Add the song to the end of the playlist.
            playlist.append(song_name)
            # Confirm the addition.
            print(f"'{song_name}' has been added to your playlist.")
            break
          else:
            print("Invalid input. Please enter at least one character for the song name.")

    # --- REMOVE SONG ---
    elif choice == '3':
        # First, check if there's anything to remove.
        if not playlist:
            print("Your playlist is empty. Nothing to remove.")
        else:
            # Show the current playlist so the user can choose which song to remove.
            print("\n--- Select a Song to Remove ---")
            for i, song in enumerate(playlist, 1):
                print(f"{i}. {song}")
            print("-------------------------------")
            
            while True:
              try:
                # Ask for the song number to remove.
                song_num_to_remove = int(input("Enter the number of the song to remove: "))
                # Check if the number is within the valid range.
                if 1 <= song_num_to_remove <= len(playlist):
                  # Remove the song using pop() and the correct index.
                  removed_song = playlist.pop(song_num_to_remove - 1)
                  print(f"Removed '{removed_song}' from your playlist.")
                  break
                else:
                  print("Invalid song number. Please try again.")
              except ValueError:
                print("Invalid input. Please enter a number.")

    # --- MOVE SONG ---
    elif choice == '4':
        # Check if there are enough songs to perform a move.
        if len(playlist) < 2:
            print("Playlist must have at least two songs to perform a move.")
        else:
            # Show the playlist to the user.
            print("\n--- Select a Song to Move ---")
            for i, song in enumerate(playlist, 1):
                print(f"{i}. {song}")
            print("-----------------------------")

            while True:
              try:
                # Get the number of the song to move.
                song_num_to_move = int(input("Enter the number of the song to move to the front: "))
                # Validate the input.
                if 1 <= song_num_to_move <= len(playlist):
                    # Pop the song from its current position.
                    song_to_move = playlist.pop(song_num_to_move - 1)
                    # Insert it at the beginning of the list.
                    playlist.insert(0, song_to_move)
                    print(f"'{song_to_move}' has been moved to the front.")
                    break
                else:
                    print("Invalid song number. Please try again.")
              except ValueError:
                print("Invalid input. Please enter a number.")

    # --- CLEAR PLAYLIST ---
    elif choice == '5':
        if not playlist:
            print("Playlist is already empty.")
        else:
            # Clear all items from the playlist.
            playlist.clear()
            print("All songs have been cleared from the playlist.")

    # --- EXIT ---
    elif choice == '6':
        print("Exiting playlist manager. Goodbye and happy listening! 👋")
        break # Exit the while loop.

    # --- INVALID CHOICE ---
    else:
        print("Invalid option, please try again. Choose a number between 1 and 6.")