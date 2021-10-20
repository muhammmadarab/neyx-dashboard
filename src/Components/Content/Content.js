import React from 'react';
import "./Content.css"

const Content = () => {
    return (
        <div class="content">
            <div class="cards">
                <div>
                    <span class="dots">. . .</span>
                    Total Orders
                    <div class="sm">something</div>
                    <div class="number">3456</div>
                </div>
                <div>
                    <span class="dots">. . .</span>
                    Bot Orders
                    <div class="sm">something</div>
                    <div class="number">
                        2345 <span class="attract">+34%</span>
                    </div>
                </div>
                <div>
                    <span class="dots">. . .</span>
                    Ongoing Conversation
                    <div class="sm">something</div>
                    <div class="number">2341</div>
                </div>
                <div>
                    <span class="dots">. . .</span>
                    Orders Completed
                    <div class="sm">something</div>
                    <div class="number">1598</div>
                </div>
            </div>
        </div>
    )
}

export default Content
