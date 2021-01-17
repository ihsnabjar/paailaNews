import React ,{useState,useEffect} from 'react';
import './Setting.css'
import * as api from '../../api/index';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function Setting() {
    const [postData, setPostData] = useState([])
    // const [postSettingData, setPostSettingData] = useState({app_name: '',})
    useEffect(() => {
        async function getData() {
            const data = await api.fetchSettingData();
        //    console.log('the setting data',data.data)
           setPostData(data.data.data)
            return data;
        }
        getData();
    }, [postData])
    console.log("i am confused",postData.data)

    // const rowa = !postData.length ? "loading..." : postData.map((pData) => ({
       
    //         app_name : pData.app_name,
    //         disclaimer_link: pData.disclaimer_link,
    //         image_url : pData.image_url,
    //         privacy_policy_link: pData.privacy_policy_link,
            
    //     }
    // ))
    const rows = !postData.length ? 'Loading.....' : postData.map(onemedia => (
        <TableRow key={onemedia.id}>
                <TableCell component="th"  scope="row">{onemedia.app_name}</TableCell>
                <TableCell align="center">
                <img src={onemedia.image_url} alt="shoes" height='25px' width='70px'/>
                </TableCell>
                <TableCell align="center">{onemedia.disclaimer_link}</TableCell>
                <TableCell align="center">{onemedia.privacy_policy_link}</TableCell>
                <TableCell align="center">{onemedia.rate_us_link}</TableCell>
                <TableCell align="center">{onemedia.terms_condition_link}</TableCell>
                <TableCell align="center">{onemedia.share_subject}</TableCell>
                <TableCell align="center">{onemedia.share_link}</TableCell>
                <TableCell align="right">
                  <div className="action__button">
                    <button >update</button>
                    {/* <button onClick={onRemove(onemedia.id)} >delete</button> */}
                  </div>
                </TableCell>
         </TableRow>
      )) 
  

    // console.log("the datatatatat",postData)
    const handleSubmit =  async (e) => {
        e.preventDefault();
    
            // console.log(postData)
            // await api.createCategoryPost(postData,tokenConfig(token));
            // dispatch({
            //     type : 'ADD_MEDIA',
            //     media: postData,
            // })
            // clear();
        
            // await api.updateCategoryMedia(categoryId, postData,tokenConfig(token))
        //   clear();
      };
    return (
        <div  className='Setting__container'>
        <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Nat/Reg</TableCell>
            {/* <TableCell align="right"> <pre>{JSON.stringify(token, null, 2)}</pre> </TableCell> */}
            <TableCell align="right">Actions</TableCell>
            <TableCell align="right">Actions</TableCell>
            <TableCell align="right">Actions</TableCell>
            <TableCell align="right">Actions</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
        <div className="Setting__title">
            <h3>Settings</h3>
            {/* <Link   to="/dashboard/media"> <div  className="backSpaceIcon"><BackspaceIcon/>  </div>  </Link> */}
        </div> 

        <div className="setting__data">
                    {/* <form className="setting__form__data" autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <div className="formC__container">
                        <input type="text"  value={rowa.app_name} onChange={(e) => setPostSettingData({...postSettingData, app_name: e.target.value })} />
                        <input type="text"  value={dtta.disclaimer_link} onChange={(e) => setPostData({ ...postData, share_link: e.target.value })} />
                        <input type="text"  value={dtta.image_url} onChange={(e) => setPostData({ ...postData, share_link: e.target.value })} />
                        <input type="text"  value={dtta.privacy_policy_link} onChange={(e) => setPostData({ ...postData, share_link: e.target.value })} />
                        <input type="text"  value={dtta.rate_us_link} onChange={(e) => setPostData({ ...postData, share_link: e.target.value })} />
                        <input type="text"  value={dtta.share_subject} onChange={(e) => setPostData({ ...postData, share_link: e.target.value })} />
                        <input type="text"  value={dtta.terms_condition_link} onChange={(e) => setPostData({ ...postData, share_link: e.target.value })} />
                        <input type="text"  value={dtta.share_link} onChange={(e) => setPostData({ ...postData, share_link: e.target.value })} />
                    </div>
                    <button type="submit" className="Adding__button">Submit</button>
                    </form> */}
        </div>    
    </div>
    )
}
export default Setting
