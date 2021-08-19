import Grid from 'components/Grid'
import Layout from 'components/Layout'

import {MEGA_NAME} from 'constants/variables';

export default function MegaTicTacToe() {
  return (
    <Layout>
      <Grid type={MEGA_NAME}/>
    </Layout>
  )
}
