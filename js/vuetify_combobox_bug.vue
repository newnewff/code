<template>
	<div>
		<v-combobox v-model="model"  :items="items" label="Search for an option" multiple >
		    <template v-slot:item="{ props, item }">
		       <v-list-item  title="Item is already selected" >
  					<template v-slot:default>
  						{{item.value}}
  					  <v-checkbox :label="item.value" :value="item.value"></v-checkbox>
  					</template>
				  </v-list-item>
		    </template>
		</v-combobox>
		
	</div>
</template>

<script setup>
  const items = reactive([1,2,3,4])
	const model = ref([])
</script>
