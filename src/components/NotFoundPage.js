const NotFoundPage = ({ text }) => {
  return (
    <div>
      <h1>{text || 'Page you are looking for is not found'}</h1>
    </div>
  );
};

export default NotFoundPage;
