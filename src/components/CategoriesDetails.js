import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFinances from '../providers/finances.provider';
import ViewDetails from '../layouts/ViewDetails';
import useCategories from '../providers/categories.provider';

export default function CategoriesDetails() {
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const { getCategories } = useCategories();

  const getUserCategories = async (month) => {
    try {
      setLoadingCategories(true);
      setCategories([]);
      const { data } = await getCategories();
      setCategories([data]);
      setLoadingCategories(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserCategories();
  }, []);

  return (
    <ViewDetails
      loadingItems={loadingCategories}
      title="Categorias"
      columnCategories={categories}
      onPostSubmit={getUserCategories}
      savings
    />
  );
}
