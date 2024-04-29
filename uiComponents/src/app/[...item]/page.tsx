const ItemPage = ({ params: { item } }: { params: { item: string[] } }) => {
  console.log(item);
  const path = ['', ...item].join('/');
  console.log(path);
  return <div>Item page {path}</div>;
};

export default ItemPage;
