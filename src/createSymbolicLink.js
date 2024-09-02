const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// 定義要創建符號連結的源目錄和目標目錄
const directories = [
    { source: path.join(__dirname, '../submodules/open-huninn-font/font'), dest: path.join(__dirname, '/assets/fonts/open-huninn-font') },
];

// 刪除現有目錄的函數
function deleteDirectoryIfExists(dir) {
    if (fs.existsSync(dir)) {
        console.log(`Deleting existing directory: ${dir}`);
        fs.rmSync(dir, { recursive: true, force: true });
    }
}

// 創建符號連結的函數
function createSymbolicLink(source, dest) {
    if (os.platform() === 'win32') {
        // 在 Windows 上使用 mklink
        exec(`mklink /D "${dest}" "${source}"`, (err, stdout, stderr) => {
            if (err) {
                console.error(`Error creating symbolic link for ${dest}: ${stderr}`);
                return;
            }
            console.log(`Symbolic link created for ${dest}: ${stdout}`);
        });
    } else {
        // 在 Linux 或 macOS 上使用 ln -s
        exec(`ln -s "${source}" "${dest}"`, (err, stdout, stderr) => {
            if (err) {
                console.error(`Error creating symbolic link for ${dest}: ${stderr}`);
                return;
            }
            console.log(`Symbolic link created for ${dest}: ${stdout}`);
        });
    }
}

// 遍歷每對源目錄和目標目錄
directories.forEach(({ source, dest }) => {
    // 刪除現有的目標目錄
    deleteDirectoryIfExists(dest);

    // 創建新的符號連結
    createSymbolicLink(source, dest);
});