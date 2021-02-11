import React, { useEffect } from 'react';

import useStyles from './styles';
import { Typography, CircularProgress, Grid  } from '@material-ui/core';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import chessImage from '../../assets/chess.jpg';
import puzzleImage from '../../assets/puzzle.jpg'
const ChessResult = () => {
    const result = useSelector((state) => state.chess); //points at reducer/index.js for posts
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!result.username){
                history.push('/notFound');
            }
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    if (!result.username)
        return (<CircularProgress/>)


    console.log(result);
    return (
        <div className = {classes.divContainer}>
            <Grid container className = {classes.gridContainer}>
                <Grid item xs = {12} sm = {6}>
                    <img className = {classes.avatar} src={result.avatar} alt="new"/>
                    <Typography variant = "h3"> {result.username} {(result.fide !== 0) && ("#" + result.fide)}</Typography>
                    <Typography variant = "h5" color = "textSecondary"> {result.name} </Typography>
                    <img src={`https://www.countryflags.io/${result.country.slice(-2).toLowerCase()}/shiny/32.png`} alt = "flag"/>
                </Grid>
                <Grid container xs = {12} sm = {6} className = {classes.statsContainer} alignItems = "center" justifyContent = "center">
                    <Grid item xs = {12} sm = {6} className = {classes.statsCard}>
                        <div>
                            <Typography variant = "h5"> Chess Blitz </Typography>
                            <img src = {chessImage} alt = "Blitz" height = "150" width = "150" style = {{marginTop: "1em", marginBottom: "1em"}}/>
                            <Typography variant = "h6"> {result.chess_blitz.record.win} - {result.chess_blitz.record.loss}</Typography>
                            <Typography variant = "body1" color = "textSecondary"> {result.chess_blitz.record.win / (result.chess_blitz.record.loss + result.chess_blitz.record.win) * 100} % </Typography>
                        </div>
                    </Grid>
                    <Grid item xs = {12} sm = {6} className = {classes.statsCard}>
                        <div>
                            <Typography variant = "h5"> Puzzles </Typography>
                            <img src = {puzzleImage} alt = "Blitz" height = "150" width = "150" style = {{marginTop: "1em", marginBottom: "1em"}}/>
                            <Typography variant = "h6"> Highest Score: {result.puzzle_rush.best.score}</Typography>
                            <Typography variant = "body1" color = "textSecondary"> Total Attempts: {result.puzzle_rush.best.total_attempts}</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default ChessResult
