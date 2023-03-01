import { useQuery } from 'react-query';
import { getMovieDetail, IMovie } from '../api';
import { useMatch } from 'react-router-dom';
function Detail() {
  const detailMatch = useMatch('detail/:detailId');

  const { data, isLoading } = useQuery<IMovie>(
    ['movieDetail', detailMatch],
    () => getMovieDetail(Number(detailMatch?.params.detailId))
  );
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <h3>로딩</h3>
      ) : data?.id ? (
        <h2>detail</h2>
      ) : (
        <p>찾을 수 없습니다</p>
      )}
    </div>
  );
}
export default Detail;
