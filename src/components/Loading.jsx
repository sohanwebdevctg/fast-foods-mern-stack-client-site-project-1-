import loadingImg from '../../public/loading/loading.gif'

const Loading = () => {
  return (
    <div className='h-screen'>
      <img src={loadingImg} className='h-full w-full'></img>
    </div>
  );
};

export default Loading;