import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Box, Chip, Container, Divider, Paper, Typography } from "@mui/material";
import PokemonTable from "../components/PokemonTable";
import { useNavigate } from "react-router-dom";

export const Profile = ({ pokemonData }) => {
    const { name, sprites, moves } = pokemonData || {};
    const navigate = useNavigate();

    useEffect(() => {
        if (!pokemonData) {
            navigate("/");
        }
    }, [navigate, pokemonData]);

    if (!pokemonData) {
        return null;
    }
    return (
        <>
            <Navbar hideSearch />
            <Container maxWidth="md">
                <Paper elevation={3}>
                    <Box display="flex" flexDirection="column" alignItems="center" p={5}>
                        <Typography variant="h4">{name}</Typography>
                        <Box display="flex" alignItems="center" width="100%" sx={{
                            flexDirection: {
                                xs: "column", md: "row"
                            },
                        }}>
                            <Box component="img" src={sprites.front_default} width="90%" height="90%" />
                            <PokemonTable pokemonData={pokemonData} />
                        </Box>
                        <Box width="100%">
                            <Divider>Variations</Divider>
                            <Box display="flex" justifyContent="space-between">
                                <Box component="img" src={sprites.front_female} width="25%" height="25%" />
                                <Box component="img" src={sprites.front_shiny} width="25%" height="25%" />
                                <Box component="img" src={sprites.front_shiny_female} width="25%" height="25%" />
                            </Box>
                            <Divider>Attacks</Divider>
                            <Box textAlign="center" marginTop="15px">
                                {moves.map((moveData, key) => (
                                    <Chip key={key} sx={{ m: "5px" }} label={moveData.move.name} />

                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </>
    );
};