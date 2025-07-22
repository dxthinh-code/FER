import { Form, Button, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn reload trang
    onSearch(keyword);
  };

  const handleReset = () => {
    setKeyword('');
    onSearch(''); // Gửi chuỗi rỗng để hiển thị toàn bộ danh sách
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <InputGroup>
        <Form.Control
          id="search-box" // ✅ Cho phép focus từ nav
          type="text"
          placeholder="Search by brand or model"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button type="submit" variant="primary">
          Search
        </Button>
        <Button variant="secondary" onClick={handleReset}>
          Reset
        </Button>
      </InputGroup>
    </Form>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
