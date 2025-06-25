### File system

    - Reading and Writing Files:
        fs.readFile(): Reads the contents of a file asynchronously.
        fs.readFileSync(): Reads the contents of a file synchronously.
        fs.writeFile(): Writes data to a file asynchronously.
        fs.writeFileSync(): Writes data to a file synchronously.

    - Working with Directories:

        fs.mkdir(): Creates a new directory asynchronously.
        fs.mkdirSync(): Creates a new directory synchronously.
        fs.readdir(): Reads the contents of a directory asynchronously.
        fs.readdirSync(): Reads the contents of a directory synchronously.

    - File Information:

        fs.stat(): Retrieves the information of a file asynchronously.
        fs.statSync(): Retrieves the information of a file synchronously.

    - Deleting Files or Directories:

        fs.unlink(): Deletes a file asynchronously.
        fs.unlinkSync(): Deletes a file synchronously.
        fs.rmdir(): Removes a directory asynchronously.
        fs.rmdirSync(): Removes a directory synchronously.

    - Renaming or Moving Files:

        fs.rename(): Renames a file or moves it to a different location asynchronously.
        fs.renameSync(): Renames a file or moves it synchronously.

### Promises

    - A promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It's a container for a value that may not yet be available at the time of its creation but will be resolved in the future, possibly asynchronously.
