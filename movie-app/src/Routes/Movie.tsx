import { useQuery } from 'react-query';
import styled from 'styled-components';
import {
  getMovieDetail,
  getMoviesLatest,
  getMoviesUpcoming,
  IGetMoviesResult,
  IMovie,
} from '../api';
import Banner from '../Components/Banner';
import Slider from '../Components/Slider';

const Wrapper = styled.main`
  padding: 20px 30px;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.white.white};
  margin-bottom: 20px;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Movie() {
  // useQuery for Latest Movie
  const { data: dataLatest, isLoading: isLoadingLatest } =
    useQuery<IGetMoviesResult>(['movies', 'latest'], getMoviesLatest);
  // useQuery for Upcoming Movie
  const { data: dataUpcoming, isLoading: isLoadingUpcoming } =
    useQuery<IGetMoviesResult>(['movies', 'upcoming'], getMoviesUpcoming);
  // useQuery for Banner
  const { data: dataBannerLeft, isLoading: isLoadingBannerLeft } =
    useQuery<IMovie>(
      ['movieDetail', dataLatest?.results[0].id],
      () => getMovieDetail(dataLatest?.results[0].id),
      {
        enabled: !!dataLatest,
      }
    );
  const { data: dataBannerRight, isLoading: isLoadingBannerRight } =
    useQuery<IMovie>(
      ['movieDetail', dataUpcoming?.results[0].id],
      () => getMovieDetail(dataUpcoming?.results[0].id),
      {
        enabled: !!dataUpcoming,
      }
    );

  const loadings =
    isLoadingLatest ||
    isLoadingBannerLeft ||
    isLoadingUpcoming ||
    isLoadingBannerRight;

  const offset = 6;

  return (
    <Wrapper>
      {loadings ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Title>영화</Title>
          <Banner
            dataBannerLeft={dataBannerLeft as IMovie}
            dataBannerRight={dataBannerRight as IMovie}
          />
          <Slider
            data={dataLatest as IGetMoviesResult}
            rowIndex={1}
            title="신작 영화"
          />
          {/* <Slider
            data={dataLatest as IGetMoviesResult}
            rowIndex={1}
            title="신작 영화"
          /> */}
        </>
      )}
    </Wrapper>
  );
}
export default Movie;
