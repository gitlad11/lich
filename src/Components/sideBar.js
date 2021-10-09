
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function SideBar(props){
	const error = props.error
	const creating = props.creating
	const addGood = props.addGood;
	const styles = {
		container : {
			height : "240px",
			width : "300px",
			display : "flex",
			flexDirection : "vertical",
			backgroundColor : "#fff",
			borderRadius : "8px",
			alignItems : "center",
			justifyContent : "center",
			boxShadow: "0 0 10px rgba(0,0,0,0.5)"
		}
	}


	return (<div style={styles.container} >
		{creating ? 
			 <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box> :
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
		<p style={{ color : "red" }}>{error}</p>
			<Button onClick={() => addGood("cart/add",
			 {lang : "1", shop : "1", id : (88146 | 88144 | 88145 | 87900 | 87899 | 87895)},{headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
    	}})} variant="contained">Добавить товар</Button>
		</Box> 
		}
	</div>)
}
export default SideBar;