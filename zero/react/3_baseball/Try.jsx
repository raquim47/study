import React, { memo } from 'react';
// 컴포넌트가 리렌더링이 되는 경우 : 1. props변경, 2.state변경 3. 부모컴포넌트가 리렌더링
// memo 부모 컴포넌트가 리렌더링 되었을 때 자식 컴포넌트가 리렌더링 되는 것을 막는다

const Try = memo(({tryInfo}) => {
  
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});
// memo 적용하면 개발자 이름이 이상하게 바뀌기 때문에 개발편의를 위해 적용
Try.displayName = 'Try';
export default Try;