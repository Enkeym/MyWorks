import React, { useState } from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Add as AddIcon } from '@mui/icons-material';
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Typography } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: '20px',
})

const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip onClick={e => setOpen(true)} title="Adding" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={"auto"} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Typography variant="h6" color="gray" textAlign="center">Create post</Typography>
                    <UserBox>
                        <Avatar sx={{ width: 30, height: 30 }} alt="Enkeym" src="/static/images/avatar/1.jpg" />
                        <Typography fontWeight={500} variant="span">Nikita Korolev</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={2}
                        placeholder="What`s on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color='primary' />
                        <ImageIcon color='secondary' />
                        <VideoCameraBackIcon color='success' />
                        <PersonAddIcon color='error' />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}><DateRangeIcon /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
};

export default Add