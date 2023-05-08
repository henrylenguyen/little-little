# Cấu trúc thư mục của reactjs

- **API:** Nơi chứa đựng các API làm việc với server
- **assets:** Nơi chứa các mục ảnh, âm thanh, videos....
- **components:** Nơi chứa các components tái sử dụng trong dự án
- **config:** Nơi chứa các file config như **_configureStore,rootSaga_**
- **constants:** Nơi chứa các type, constant
- **hooks:** Nơi chứa các hook, custom hook
- **layouts:** Nơi chứa layout khác
- **pages:** Nơi chứa các của pages, ví dụ: Home, Contact,...
- **routes:** Nơi chứa các routes của dự án
- **reduxs:** Nơi chứa các mục redux của dự án
  - Slice là mục chứa các tệp liên quan đến redux toolkit
- **utils:** Nơi chứa các hàm xử lý logic chung
- **schemas:** Nơi chứa schema dùng để xử lý validation
- **thunks:** Nơi chứa các thunk của dự án

# Hướng dẫn khởi chạy dự án

### Khởi chạy dự án reactjs:

```
1. Mở terminal
2. yarn start

```

# Hướng dẫn khởi tạo dự án typeScript

### Bước 1: Cài đặt dự án bằng yarn (sử dụng yarn nhanh)

```
  yarn create react-app my-app --template typescript

```

### Bước 2: Cài đặt các config

```
  yarn add -D prettier eslint-plugin-prettier eslint-config-prettier

```

### Bước 3: Cấu hình eslint

- Mở **package.json** tại phần **"script"** thêm:

```
    "lint": "eslint --ext ts,tsx src/",
    "lint:fix": "eslint --fix --ext ts,tsx src/",
    "prettier": "prettier --check \"src/**/(*/.tsx|*.ts|*.css|*.scss)\"",
    "prettier:fix": "prettier --write \"src/**/(*/.tsx|*.ts|*.css|*.scss)\""

```

=> Đây là cú pháp check và sửa lỗi của eslint và prettier

### Bước 4: Tạo file .prettierrc ngoài global dự án và cấu hình như dưới

```
 {
 "arrowParens": "always",
 "semi": false,
 "trailingComma": "none",
 "tabWidth": 2,
 "endOfLine": "auto",
 "useTabs": false,
 "singleQuote": true,
 "printWidth": 120,
 "jsxSingleQuote": true
}

```

### Cụ thể, cấu hình này bao gồm:

```


arrowParens: "always": Luôn bao quanh các tham số của hàm mũi tên bằng dấu ngoặc đơn.
semi: false: Không sử dụng dấu chấm phẩy để kết thúc câu lệnh.
trailingComma: "none": Không sử dụng dấu phẩy cuối cùng trong các cấu trúc dữ liệu như mảng hoặc đối tượng.
tabWidth: 2: Sử dụng khoảng cách bằng 2 để thay thế cho kí tự tab.
endOfLine: "auto": Tự động chọn phương thức xuống dòng phù hợp với hệ điều hành mà file đang được lưu trữ trên.
useTabs: false: Sử dụng khoảng cách thay vì kí tự tab để thụt lề.
singleQuote: true: Sử dụng dấu ngoặc đơn để bao quanh các chuỗi.
printWidth: 120: Giới hạn chiều dài của mỗi dòng mã nguồn là 120 kí tự.
jsxSingleQuote: true: Sử dụng dấu ngoặc đơn để bao quanh các chuỗi trong JSX.

```

### Bước 5: Tạo file .eslintrc ngoài global dự án và cấu hình như dưới:

```
{
 "extends": ["react-app","prettier"],
 "plugins": ["react","prettier"],
 "rules": {
   "prettier/prettier":[
     "warn",
     {
       "arrowParens": "always",
       "semi": false,
       "trailingComma": "none",
       "tabWidth": 2,
       "endOfLine": "auto",
       "useTabs": false,
       "singleQuote": true,
       "printWidth": 120,
       "jsxSingleQuote": true
     }
   ]
 }
}
```

### Bước 6: Tạo file .editorconfig để cấu hình IDE

```
[*]
index_size = 2
indent_style = space

```

### Với cấu hình trên, các quy tắc được thiết lập như sau:

```


[*]: Áp dụng tất cả các quy tắc định dạng cho tất cả các tệp trong dự án.
index_size = 2: Kích thước của các chỉ mục trong file sẽ là 2.
indent_style = space: Thụt lề sẽ sử dụng khoảng trắng thay vì tab.
```

### Bước 7: Mở file tsconfig.json thêm cấu hình dưới để thuận tiện cho việc import

```
"baseUrl": "src"
```

# Check các lỗi bằng lint và prettier

### Tìm kiếm các lỗi

```
yarn lint
```

### Fix nhanh các lỗi

```
yarn lint:fix
```

# Cài đặt các thư viện cần thiết

## Tailwindcss

```
yarn add -D tailwindcss postcss autoprefixer
yarn tailwindcss init

```

## Cấu hình tailwindcss

### Bước 1: vào tailwind.config.js thêm đoạn dưới

```
content: ['./src/**/*.{js,jsx,ts,tsx}'],

```

### Bước 2: Cài thư viện sass vào để có thể biến file .css thành .scss

```
yarn add sass node-sass

```

### Bước 3: đổi đuôi index.css thành index.scss và import code dưới:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

## Config prettier tailwindcss

```
yarn add -D prettier-plugin-tailwindcss
```

## Redux toolkit

```
yarn add @reduxjs/toolkit react-redux

```

## install axios (thư viện hỗ trợ thao tác API)

```
  yarn add axios
```

## install react-router-dom (thư viện hỗ trợ về router)

```
  yarn add react-router-dom
```

## install sweetAlert (thư viện về pop up thông báo)

```
  yarn add sweetalert2
```

## install react-paginate (quản lý phân trang)

```
  yarn add react-paginate
```

## install react-hook-form (quản lý form)

```
  yarn add react-hook-form
```

## install yup hook-form (validate với yup dành cho react-hook-form)

```
  yarn add @hookform/resolvers yup
```

## install swiper (thư viện carousel)

```
   yarn add swiper
```

## install material UI

```
  yarn add @mui/material @emotion/react @emotion/styled
```

## @mui/icons-material (thư viện icon của MUI)

```
  yarn add @mui/icons-material
```

## install Ant Design

```
  yarn add antd
```

## install loading skeleton (thư viện loading)

```
  yarn add react-loading-skeleton
```

# install momentJS (Format lại date)

```
  yarn add moment
```

## React-modal (thư viện hỗ trợ modal)

```
  yarn add react-modal
```

## react-select (thư viện hỗ trợ dropdown)

```
yarn add react-select

```

## Ck editor (hỗ trợ viết văn bản)

```
  yarn add --save @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic

```

## date-fns (đăng kí vùng)

```
  yarn add date-fns
```

## @mui/lab

```
yarn add @mui/lab
```

## @mui/x-date-pickers

```
  yarn add @mui/x-date-pickers
```

## react-toastify (thông báo dạng toast)

```
yarn add react-toastify
```
## jspdf (thư viện xuất ra file PDF)

```
yarn add jspdf
```

## html2canvas file-saver (thư viện chụp ảnh màn hình)

```
yarn add html2canvas file-saver
```