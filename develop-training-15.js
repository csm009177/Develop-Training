
const fetchProducts = async () => {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve([
        { id:1, title: '김치'  , price : ' 5000원' },
        { id:2, title: '라면'  , price : ' 3000원' },
        { id:3, title: '삼겹살', price : '15000원' },
      ])
    }, 500);
  });
};

const Carousel = ({ fetchProducts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    const loadProducs = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducs();
  }, [fetchProducts]);

  if(products.length ===0) {
    return <div>Loading...</div>;
  }

  retrun (
    <div>
      <ul>
        {products.map((products)=> (
          <li key={products.id}>
            {products.title} - {products.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;

const Eample = () => {
  return <Carousel fetchProducts={ fetchProducts} />;
};

export default Eample;