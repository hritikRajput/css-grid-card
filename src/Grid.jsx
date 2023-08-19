import "./Grid.css"
import heart from "./assets/heart.png"
export default function Grid() {
    return (
        <div className="booklist">
            {/* Book 1 */}
            <div className="booklist-book">
                <div className="cover-wrapper">
                    <a href="#" className="cover">
                        <div className="product-image">
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1529604411i/40604658.jpg"
                                alt=""
                                className="w-full"
                            />
                        </div>
                    </a>
                    <div className="product-icon"><img src={heart} alt="" className="w-full" /></div>
                </div>
                <h2 className="font-serif-bold lg:pt-4 leading-tight">
                    <a href="#">Title</a>
                </h2>
                <h3>Author</h3>
                <div>
                    <div>OP</div>
                    <div>CP</div>
                </div>
            </div>

            {/* Book 2 */}
            <div className="booklist-book">
                <div className="cover-wrapper">
                    <a href="#" className="cover">
                        <div className="product-image">
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1691084837i/63241104.jpg"
                                alt=""
                                className="w-full"
                            />
                        </div>
                    </a>
                </div>
                <h2 class="font-serif-bold lg:pt-4 leading-tight">
                    <a href="#">Title</a>
                </h2>
                <h3>Author</h3>
                <div>
                    <div>OP</div>
                    <div>CP</div>
                </div>
            </div>

            {/* Book 3 */}
            <div className="booklist-book">
                <div className="cover-wrapper">
                    <a href="#" className="cover">
                        <div className="product-image">
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1686092508i/62334530.jpg"
                                alt=""
                                className="w-full"
                            />
                        </div>
                    </a>
                </div>
                <h2 class="font-serif-bold lg:pt-4 leading-tight">
                    <a href="#">Title</a>
                </h2>
                <h3>Author</h3>
                <div>
                    <div>OP</div>
                    <div>CP</div>
                </div>
            </div>

            {/* Book 4 */}
            <div className="booklist-book">
                <div className="cover-wrapper">
                    <a href="#" className="cover">
                        <div className="product-image">
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1685350945i/65678550.jpg"
                                alt=""
                                className="w-full"
                            />
                        </div>
                    </a>
                </div>
                <h2 className="font-serif-bold lg:pt-4 leading-tight">
                    <a href="#">Title</a>
                </h2>
                <h3>Author</h3>
                <div>
                    <div>OP</div>
                    <div>CP</div>
                </div>
            </div>

            {/* Book 5 */}
            <div className="booklist-book">
                <div className="cover-wrapper">
                    <a href="#" className="cover">
                        <div className="product-image">
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1446469353i/22822858.jpg"
                                alt=""
                                className="w-full"
                            />
                        </div>
                    </a>
                </div>
                <h2 class="font-serif-bold lg:pt-4 leading-tight">
                    <a href="#">Title</a>
                </h2>
                <h3>Author</h3>
                <div>
                    <div>OP</div>
                    <div>CP</div>
                </div>
            </div>

            {/* Book 6 */}
            <div className="booklist-book">
                <div className="cover-wrapper">
                    <a href="#" className="cover">
                        <div className="product-image">
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1446469353i/22822858.jpg"
                                alt=""
                                className="w-full"
                            />
                        </div>
                    </a>
                </div>
                <h2 class="font-serif-bold lg:pt-4 leading-tight">
                    <a href="#">Title</a>
                </h2>
                <h3>Author</h3>
                <div>
                    <div>OP</div>
                    <div>CP</div>
                </div>
            </div>

            {/* Book 7 */}
            <div className="booklist-book">
                <div className="cover-wrapper">
                    <a href="#" className="cover">
                        <div className="product-image">
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1446469353i/22822858.jpg"
                                alt=""
                                className="w-full"
                            />
                        </div>
                    </a>
                </div>
                <h2 class="font-serif-bold lg:pt-4 leading-tight">
                    <a href="#">Title</a>
                </h2>
                <h3>Author</h3>
                <div>
                    <div>OP</div>
                    <div>CP</div>
                </div>
            </div>
            {/* Book 8 */}
            <div className="booklist-book">
                <div className="cover-wrapper">
                    <a href="#" className="cover">
                        <div className="product-image">
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1446469353i/22822858.jpg"
                                alt=""
                                className="w-full"
                            />
                        </div>
                    </a>
                </div>
                <h2 class="font-serif-bold lg:pt-4 leading-tight">
                    <a href="#">Title</a>
                </h2>
                <h3>Author</h3>
                <div>
                    <div>OP</div>
                    <div>CP</div>
                </div>
            </div>
        </div>
    )
}