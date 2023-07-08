import React,{ useEffect, useState} from 'react';
import ShowGrid from './showGrid';
import {firebase} from '../config';


export default ShowMovieList = ({showtitle,collectionname})=>{
    const [tvshows, setTvshows] = useState([]);
    const movieRef = firebase.firestore().collection(collectionname);

    useEffect (() => {
        const fetchData = async () => {
            try {
                    movieRef
                    .onSnapshot(
                    querySnapshot => {
                        const users = []
                        querySnapshot.forEach((doc) => {
                            const {description,name,pic,tags,video} = doc.data()
                            users.push({
                                id:doc.id,
                                description,
                                name,
                                pic,
                                tags,
                                video
                            })
                        })
                        
                        setTvshows(users);
                        //console.log(users);
                    }
                )
            } catch (error) {
                console.log(error); 
            }
            
        }

        fetchData()
        //console.log(tvshows)
    },[]);


    return (
        <>
            <ShowGrid title={showtitle} showList={tvshows} />
        </>
    );
}