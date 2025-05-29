import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react'
interface TagProps {
    label: string;
    value: string | number;
}
const ReviewTag: React.FC<TagProps> = ({ label, value }) => {
    return (
        <Stack direction="row" gap={1}>
            <Typography
                variant="body1"
                textTransform="capitalize"
                fontWeight="bold"
            >
                {label} :
            </Typography>
            <Typography
                sx={{
                    fontVariant: "none",
                    fontWeight: "light",
                    textTransform: "capitalize",
                    ml: "0.5rem",
                }}
                variant="body1"
            >
                {value}
            </Typography>
        </Stack>
    )
}

export default ReviewTag
