import React from 'react'
import {
    Card,
    CardHeader,
    Avatar,
    IconButton,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
} from '@material-ui/core';
import StoreIcon from '@material-ui/icons/Store';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const SearchResult = (props) => {
    const { name, html_url, owner, description, created_at, language } = props.items
    const date_format = new Date(created_at)
    const split_date = date_format.toDateString().split(' ')
    const final_date_format = split_date[1] + ' ' + split_date[2] + ', ' + split_date[3]
    return (
        <Card style={{ width: '30%', marginTop: 20 }}>
            <CardHeader
                avatar={
                    <Avatar src={owner.avatar_url} alt={owner.login} />
                }
                action={
                    <IconButton onClick={()=> window.open(owner.html_url, "_blank")}>
                        <AccountCircleIcon />
                    </IconButton>
                }
                title={owner.login}
                subheader={final_date_format}
            />
            <CardMedia
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Typography component="p">
                    {description}
          </Typography>
                <Typography component="p">
                   Language : {language !== null ? language: '-'}
          </Typography>
            </CardContent>
            <CardActions disableActionSpacing>
                <IconButton aria-label="repository" onClick={()=> window.open(html_url, "_blank")}>
                    <StoreIcon />
                </IconButton>
                {name}
            </CardActions>
        </Card>
    )
}