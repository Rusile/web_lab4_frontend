import {useMediaQuery} from "@mui/material";

const isMobile = () => {
    return useMediaQuery('(max-width: 800px)')
}

export default isMobile;