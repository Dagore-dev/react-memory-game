import SelectMode from '../components/SelectMode'
import PrimaryLayout from '../layouts/PrimaryLayout'

export default function Main (): JSX.Element {
  return (
    <PrimaryLayout>
      <SelectMode modes={['Fácil', 'Normal', 'Difícil']} />
    </PrimaryLayout>
  )
}
