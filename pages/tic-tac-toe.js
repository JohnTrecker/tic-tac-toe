import Layout from 'components/Layout'
import Grid from 'components/Grid'

import {DEFAULT_NAME} from 'constants/variables'

export default function TicTacToe() {
  return (
    <Layout>
      <Grid type={DEFAULT_NAME}/>
    </Layout>
  )
}
