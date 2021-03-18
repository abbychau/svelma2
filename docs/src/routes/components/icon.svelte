<script>
  import { Icon } from 'svelma2'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
</script>

<DocHeader title="Icon" subtitle="Font Awesome icons" />

<Example code={`<script>
  import { Icon } from 'svelma2'
</script>

<Icon pack="fab" size="is-large" icon="github" />
`}>
  <div slot="preview">
    <Icon pack="fab" size="is-large" icon="github" />
  </div>
</Example>
