const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// 定義要創建符號連結的源目錄和目標目錄
const directories = [
    { source: path.join(__dirname, '../submodules/open-huninn-font/font'), dest: path.join(__dirname, '/assets/fonts/open-huninn-font') },
];

// 檢查並刪除現有目錄或符號連結
function deleteIfExists(dest) {
    if (fs.existsSync(dest)) {
        const stat = fs.lstatSync(dest);
        if (stat.isSymbolicLink() || stat.isDirectory()) {
            console.log(`Deleting existing link or directory: ${dest}`);
            fs.rmSync(dest, { recursive: true, force: true });
        }
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
    // 檢查並刪除現有的目標符號連結或目錄
    deleteIfExists(dest);

    // 創建新的符號連結
    createSymbolicLink(source, dest);
});