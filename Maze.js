const solve = (maze) => {
    const dfs = (maze, r, c, path) => {
        // Check if current position is out of bounds or blocked
        const rowInbounds = r >= 0 && r < maze.length;
        const colInbounds = c >= 0 && c < maze[0].length;
        if (!rowInbounds || !colInbounds || maze[r][c] === 0) {
            return [];
        }

        // Check if we've reached the destination
        if (r === maze.length - 1 && c === maze[0].length - 1) {
            return [path];
        }

        // Mark the cell as visited
        maze[r][c] = 0;

        // Initialize an array to collect all paths
        let paths = [];

        // Move Down
        paths = paths.concat(dfs(maze, r + 1, c, path + 'D'));
       
        // Move Up
        paths = paths.concat(dfs(maze, r - 1, c, path + 'U'));
      
        // Move Right
        paths = paths.concat(dfs(maze, r, c + 1, path + 'R'));
      
        // Move Left
        paths = paths.concat(dfs(maze, r, c - 1, path + 'L'));
      
        // Unmark the cell as visited for other paths
        maze[r][c] = 1;

        return paths;
    }

    // Start DFS from the top-left corner (0, 0) with an empty path
    return dfs(maze, 0, 0, '');
}

const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 1]
];

const paths = solve(maze);
console.log(paths);
