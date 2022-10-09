function App() {
  return (
    <>
      <h1>가상화폐 거래소</h1>
      <div>
        <input></input>
        <button>장바구니 담기</button>
        <button>구매하기</button>
      </div>
      <div>
        <ul>
          <li>
            <input type="checkbox" />
            <span>Bitcoin</span>
            <button>수정</button>
            <button>삭제</button>
          </li>
          <li>
            <input type="checkbox" />
            <span>Ether</span>
            <button>수정</button>
            <button>삭제</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
