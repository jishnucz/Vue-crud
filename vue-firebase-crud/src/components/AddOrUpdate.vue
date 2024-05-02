<script setup>

import {defineComponent, ref, onMounted} from 'vue';
import { db } from "../firebase.js";
import { addDoc,updateDoc,doc, collection } from 'firebase/firestore';

const props = defineProps({
   data: Object,
   isNew: Boolean
})

defineComponent({
   name: 'AddOrUpdate'
})

const emit = defineEmits(['close'])

onMounted(() => {

task.value = {...task.value, ...props.data}

})



const task = ref({
   name: '',
   description: ''
})

async function addOrUpdate() {
   if (props.isNew) {
      await addDoc(collection(db , 'tasks'), task.value).then((res) => {
         emit('close')
      })
   }
   else {
   await updateDoc(doc(db,'tasks', props.data.id), task.value).then((res)=> {
      emit('close')
   })
   }
}



</script>

<template>
<transition name="modal">
<div class="modal-overlay">
<div class="modal-wrapper">
<div class="modal-container">
   <input type="text" placeholder="Enter name" v-model="task.name">
   <textarea placeholder="Enter Description" v-model="task.description"></textarea>
   <button @click="emit('close')">Close</button>
   <button @click="addOrUpdate()">{{ isNew ? "Add" : "Update"  }}</button>

</div>
</div>
</div>
</transition>
</template>


<style>
.modal-overlay {
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: rgba(0,0,0,0.3);
transition: opacity .3 ease;
}

.modal-wrapper {
display: flex;
justify-content: center;
align-items: center;
height: 100%;
}
.modal-container
{
background: #fff;
width: 300px;
}
input, textarea {
width: 90%;
margin: auto;
margin-bottom: 20px;
overflow:hidden
}

</style>