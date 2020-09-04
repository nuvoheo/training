# Webpack
## Webpack là gì?
Là một module bundler (quản lý và tải các module độc lập). Nó nhận các module phụ thuộc và biên dịch chúng thành một file. Bạn có thể sử dụng file này trong khi phát triển ứng dụng bằng dòng lệnh hoặc bằng cách định cấu hình nó bằng tệp webpack.config.js
* Giúp web load nhanh hơn, giảm tải cho phía server
* Giúp quản lý các module dễ dàng hơn
* Giúp chuyển đổi để trình duyện hiểu được thông qua babel Transpiler
## Config webpack
* Tạo file [webpack.config.js](./webpack.config.js)
    ```js
    const path = require('path');
    const config = {
        // Khai báo điểm bắt đầu
        entry: './src/index.js', 
        output: {
            filename: 'bundle.js',
            // Khai bao thu muc file (duong dan tuyet doi)
            path: path.resolve(__dirname, 'build'),
        }
    }

    module.exports = config;
    ```
## Webpack: Loader
* Sử lý file trước khi require (import) | load vào
* Biến đổi thành JS (CSS) thuần cho mọi trình duyệt
* Sử dụng các loader đã xay dựng sẵn
## Webpack: Babel
 Là một chương trình biên dịch và trình dịch mã Javascript

Một số module
* **babel-core**: Chuyển code ES6 thành code ES5.
* **babel-loader**: Một webpack helper giúp chuyển code dựa trên preset.
* **babel-preset-env**: Bộ preset giúp babel chuyển code ES6, ES7 và ES8 thành ES5.
* **babel-preset-react**: Bộ Preset giúp chuyển JSX thành javascript.