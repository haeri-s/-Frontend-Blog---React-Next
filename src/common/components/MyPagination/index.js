import react from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Grid,} from '@mui/material';

// 페이지 처리
// page: 현재 페이지, totalPage: 총 페이지 수, onChange: 페이지 변경 후 실행
const MyPagination = ({ page, totalPage = 5, onChange }) => {
    const handleChange = (event, page) => {
        if (onChange) {
            onChange(page)
        }
        return
    }

    
    return (
        <Grid
            sx={{marginTop:'60px', display: 'flex', justifyContent:'center'}}
        >
            <Pagination size='large' siblingCount={0} page={page} count={totalPage} onChange={handleChange} shape="rounded" sx={{textAlign:'center'}}/>
        </Grid>
    )
}
export default MyPagination;

