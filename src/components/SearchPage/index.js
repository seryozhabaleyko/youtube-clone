import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

import ChannelRow from '../ChannelRow';
import VideoRow from '../VideoRow';

import './searchPage.scss';

function SearchPage() {
    return (
        <section className="search-page">
            <div className="search-page__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://yt3.ggpht.com/a/AATXAJw4XJTgR209tiFuQZEaHV2XSWEbZNBc-Dig_51H=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="ДНЕВНИК ХАЧА"
                verified
                subs="5,9 млн подписчиков"
                noOfVideos="263 видео"
                description="YouTube/ДневникХача По вопросам сотрудничества: +7 (495) 205-205-9 amiran@lionsmedia.ru."
            />
            <hr />
            <VideoRow
                views="155 тыс. просмотров"
                description="Регистрируйся в LetyShops и возвращай горящий кэшбэк — https://bit.ly/2PanToB -------------------- Лучший Скай Дайвер Макс:..."
                timestamp="1 час назад"
                channel="ДНЕВНИК ХАЧА"
                title="Влог из США. Я сделал ЭТО!"
                image="https://i.ytimg.com/vi/Chjs4xqYe0E/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCWUmwGcEO_xkS9YFyrZYyy9I7X2A"
            />
            <VideoRow
                views="155 тыс. просмотров"
                description="Регистрируйся в LetyShops и возвращай горящий кэшбэк — https://bit.ly/2PanToB -------------------- Лучший Скай Дайвер Макс:..."
                timestamp="1 час назад"
                channel="ДНЕВНИК ХАЧА"
                title="Влог из США. Я сделал ЭТО!"
                image="https://i.ytimg.com/vi/Chjs4xqYe0E/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCWUmwGcEO_xkS9YFyrZYyy9I7X2A"
            />
            <VideoRow
                views="155 тыс. просмотров"
                description="Регистрируйся в LetyShops и возвращай горящий кэшбэк — https://bit.ly/2PanToB -------------------- Лучший Скай Дайвер Макс:..."
                timestamp="1 час назад"
                channel="ДНЕВНИК ХАЧА"
                title="Влог из США. Я сделал ЭТО!"
                image="https://i.ytimg.com/vi/Chjs4xqYe0E/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCWUmwGcEO_xkS9YFyrZYyy9I7X2A"
            />
            <VideoRow
                views="155 тыс. просмотров"
                description="Регистрируйся в LetyShops и возвращай горящий кэшбэк — https://bit.ly/2PanToB -------------------- Лучший Скай Дайвер Макс:..."
                timestamp="1 час назад"
                channel="ДНЕВНИК ХАЧА"
                title="Влог из США. Я сделал ЭТО!"
                image="https://i.ytimg.com/vi/Chjs4xqYe0E/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCWUmwGcEO_xkS9YFyrZYyy9I7X2A"
            />
            <VideoRow
                views="155 тыс. просмотров"
                description="Регистрируйся в LetyShops и возвращай горящий кэшбэк — https://bit.ly/2PanToB -------------------- Лучший Скай Дайвер Макс:..."
                timestamp="1 час назад"
                channel="ДНЕВНИК ХАЧА"
                title="Влог из США. Я сделал ЭТО!"
                image="https://i.ytimg.com/vi/Chjs4xqYe0E/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCWUmwGcEO_xkS9YFyrZYyy9I7X2A"
            />
        </section>
    );
}

export default SearchPage;
