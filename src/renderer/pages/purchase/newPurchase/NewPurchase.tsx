import { useQuery } from 'renderer/funcs/hooks';

const AddPurchasePage: React.FC = () => {
  const query = useQuery();

  const store = JSON.parse(query.get('store') ?? '');

  if (!store) return <div> Store not Provided</div>;

  return (
    <div>
      <p>In the Works</p>
      <p>{store.name}</p>
    </div>
  );
};

export default AddPurchasePage;
