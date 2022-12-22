import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ItemPreview from '../components/ItemPreview'
import axios from 'axios'

const Single = () => {
  const {id} = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      axios.get('https://api.escuelajs.co/api/v1/products/' + id)
      .then(res => {setData(res.data); setLoading(false)})
  }, [data])
  return (
    <ItemPreview data={data} loading={loading}/>
  )
}

export default Single