import './Catalog.css'
import { useState } from 'react';
import {Card} from './Card/Card.jsx'
import { store } from "../../data/store";
export function Catalog(){
    const[columns,SetColumns] = useState(4);
    const [currentPaginPage,setCurrentPaginPage]= useState(0);
    const [nextPaginPage,setNextPaginPage]= useState(12);
    const itemsCount=12;
    let newStore = store.slice(currentPaginPage,nextPaginPage);
    // const cardElements = store.map(item=><Card title={item.title} price={item.price}/>);
    return (
    <>
    <section className="catalog">
        <h1>Новая коллекция</h1>
        <div className="catalog_actions">
                <div className="catalog_action_left">
                    <div className="catalog_collection">
                        <img src="src\assets\img\burger-menu-right-svgrepo-com.svg" alt="#" width="30px" height="30px"/>
                        <p className="actions_font">Коллекция</p>
                    </div>
                    <div className="catalog_filter">
                        <img src="src\assets\img\slider_f6l7dwmx8vz3.svg" alt="#" width="30px" height="30px"/>
                        <p className="actions_font">Фильтр</p>
                    </div>
                </div>
                <div className="catalog_actions_right">
                    <div className="form-group">
                        <div className="select-wrapper">
                            <p>Сортировать по:</p>
                            <select name="select-category" id="" className="select">
                                <option value="4">Новинки</option>
                                <option value="1">По популярности</option>
                                <option value="4">По скидке</option>
                                <option value="2">По возрастанию цены</option>
                                <option value="3">По убыванию цены</option>
                                
                            </select>
                        </div>
                    </div>                    
                    <div class="catalog_view"> 
                        <span class="view_font">Вид: </span>
                        <button onClick={()=>{SetColumns(3)}} class="col-3"><p className="actions_font">3</p></button>&nbsp;
                        <button onClick={()=>{SetColumns(4)}} class="col-4"><p className="actions_font">4</p></button>
                    </div>

                </div>
            </div>
        <div className={columns == 3? 'catalog_wrapper col-3': 'catalog_wrapper'}>
            {
                // cardElements
                newStore.map((element) => <Card id= {element.id} title={element.title} price={element.price} img={element.img}/>)
            }

        </div>
        <div className="pagesAndMore">
                    <div className="pages">
                         <button onClick={()=>{setCurrentPaginPage(0);setNextPaginPage(itemsCount);}} className="page">1</button>
                        <button onClick={()=>{setCurrentPaginPage(12);setNextPaginPage(itemsCount*2);}} className="page">2</button>
                        <button onClick={()=>{setCurrentPaginPage(24);setNextPaginPage(itemsCount*3);}} className="page">3</button>
                        <button onClick={()=>{setCurrentPaginPage(0);setNextPaginPage(itemsCount);}} className="page">4</button>
                        <button onClick={()=>{setCurrentPaginPage(12);setNextPaginPage(itemsCount*2);}} className="page">5</button>
                        {/* <button onClick={} className="page">3</button>
                        <button onClick={} className="page">4</button>
                        <button onClick={} className="page">5</button>  */}
                    </div>
                    <a className="more_btn">Показать еще</a>
                </div>
    </section>


    </>
    );
}
