import SelectMode from '../components/SelectMode'
import PrimaryLayout from '../layouts/PrimaryLayout'

export default function Main (): JSX.Element {
  return (
    <PrimaryLayout>
      <h1 className='text-4xl font-bold text-center text-fuchsia-500'>Juego de memoria</h1>
      <SelectMode modes={['Fácil', 'Normal', 'Difícil']} />
    </PrimaryLayout>
  )
}
