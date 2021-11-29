import { Card } from "../styles/Boxes"
import React, { useState } from "react";

const Leaderboard = () => {

    const leaderboardData = userData()
    const [formData, setFormData] = useState({});
    const [filter, setFilter] = useState(false);

    
    const createData = async data => {
        leaderboardData.create(person)
        .then ( () => {

        })
        
         
        return (
        <Card>
            <CardContent>
                <Grid container justify="center" alignItems="center" spacing={2}>
                    {/* .data?.map  */}
                    <h1>Alex</h1>
                    <h2>Jake</h2>
                    <h3>Blake</h3>
                </Grid>
            </CardContent>
        </Card>
    );
};

    return getData();

};
export default Leaderboard