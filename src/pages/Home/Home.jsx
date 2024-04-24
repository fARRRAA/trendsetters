import "./Home.css"
import { useState } from "react"
import { store } from '../../data/storeforslider'
import { Card } from '../Catalog/Card/Card'
export function Home() {
    const [id, setId] = useState(0)
    const[minId, setMinId] = useState(4)
    const[maxId, setMaxId] = useState(store.length)
    let temp =1;
    return (
        <>
            <div className="home">
                <div className="container">
                    <div className="home_inner">
                        <div className="home_wrapper">
                            <div className="item">
                                <p className="item_title">Новинки</p>
                            </div>
                            <div className="item">
                                <p className="item_title">Рубашки</p>
                            </div>
                            <div className="item">
                                <p className="item_title">Футболки</p>
                            </div>
                            <div className="item">
                                <p className="item_title">Джинсы</p>
                            </div>
                            <div className="item">
                                <p className="item_title">Верхняя одежда</p>
                            </div>
                            <div className="item">
                                <p className="item_title">Трикотаж</p>
                            </div>
                        </div>
                        <div className="home_slider">
                            <h1 className="slider_title">Новая коллекция</h1>
                            <div className="slider_inner">
                                <div className="slider_items">
                                    <Card img={store[id].img} id={store[id].id} title={store[id].title} price={store[id].price} />
                                    <Card img={store[id + temp].img} id={store[id].id+temp} title={store[id + temp].title} price={store[id +temp].price} />
                                    <Card img={store[id + temp+1].img} id={store[id+temp+1].id} title={store[id + temp+1].title} price={store[id +temp+1].price} />
                                    <Card img={store[id + temp+2].img} id={store[id+temp+2].id} title={store[id + temp+2].title} price={store[id +temp+2].price} />
                                </div>
                                <div className="slider_btns">
                                    <button className="slider_btn" onClick={
                                        () => {
                                            if (id > 0) {
                                                setId((id) => id - 1);
                                                setMinId((minId) => minId - 1);
                                            }
                                        }}>Назад</button>
                                    <p>{minId}/{maxId}</p>
                                    <button className="slider_btn" onClick={
                                        () => {
                                            if (id+temp+1 < store.length - 2) {
                                                setId((id) => id + 1);
                                                setMinId((minId) => minId + 1);

                                            }
                                        }}>Вперед</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}