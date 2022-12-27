import { useAssets } from 'expo-asset'

function useLeafletHtml(){
  const [assets, error] = useAssets([require('@assets/leaflet/index.html')])

  return assets?.length ? {uri: assets[0].localUri ?? ''} : { html: '<h1>Not found HTML file</h1>' }
}

export default useLeafletHtml
