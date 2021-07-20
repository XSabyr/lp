const NotFoundPage = ({ text }) => {
  return <div>{text || <h1>Page you are looking for is not found</h1>}</div>;
};

export default NotFoundPage;
