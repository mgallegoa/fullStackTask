import app from './app'
import config from './config'

app.listen(config.SERVER_PORT, () => {
    console.log('Server on port:', config.SERVER_PORT);
    
})