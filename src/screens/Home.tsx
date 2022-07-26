import CardTemplate from "../components/CardTemplate";
import Layout from "../components/Layout";
import ListItems from "../components/ListItems";

const Home = () => {
  return (
    <>
      <Layout>
        <ListItems />
        <div className="pl-[25px] grow-1 pt-[25px]">
          <CardTemplate />
        </div>
      </Layout>
    </>
  );
};

export default Home;
