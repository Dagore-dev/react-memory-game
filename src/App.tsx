import { Route } from 'wouter'
import Main from './views/Main'
import Game from './views/Game'

export default function App (): JSX.Element {
  return (
    <>
      <Route path='/new/:level'>
        {params => <Game level={params.level ?? '1'} />}
      </Route>

      <Route path='/'>
        <Main />
      </Route>
    </>
  )
}
