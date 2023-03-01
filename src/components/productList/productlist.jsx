import "./productlist.css";
import Product from "../product/product";
import {products} from "../../data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire.</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate obcaecati odio laudantium dolores exercitationem reprehenderit hic aut temporibus iure similique et, pariatur perferendis illum at rem! Voluptatem quia cum odit?
                </p>
            </div>
            <div className="pl-list">
                {
                products.map((item) => (
                    <Product key={
                            item.id
                        }
                        img={
                            item.img
                        }
                        link={
                            item.link
                        }/>
                ))
            } </div>
        </div>
    );
}

export default ProductList;
