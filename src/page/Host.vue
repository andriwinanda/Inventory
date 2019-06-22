<template>
  <div>
    <h1>Classroom Collaboration (teacher)</h1>
    <div id="gameSelection">
      <h2>Pick a question type</h2>
      <br>
      <button @click="pilih='shortQuestion'" class="button">Short Answer</button>
      <button @click="pilih='tfQuestion'" id="trueFalse" class="button">True False</button>
      <br>
      <br>
      <div class="question" v-show="pilih">
        <div v-if="pilih === 'shortQuestion'">
          <h2>Short Answer Question</h2>
          <br>
          <form id="shortQuestion" @submit="submitSQuestion">
            <label for="question" style="font-size:30px;">Question:</label>
            <input type="text" v-model="question">
            <br>
            <label for="answer" style="font-size:30px;">Answer:</label>
            <input type="answer" v-model="answer">
            <br>
            <label for="timeLimit" style="font-size:30px;">Time Limit:</label>
            <input type="range" step="5" min="10" max="90" id="timeLimit">
            <br>

            <b-button @click="submitSQuestion">Submit</b-button>
          </form>
        </div>

        <div id="truefalse" v-else>
          <h2>True Or False Question</h2>
          <br>
          <form id="trueFalseQuestion" @submit="submitTfQuestion">
            <label for="tfquestion" style="font-size:30px;">Question:</label>
            <input type="text" v-model="question">
            <br>
            <label for="trueorfalse" style="font-size:30px;">Answer:</label>
            <input type="radio" v-model="trueorfalse" name="true" value="true">
            <label for="true" style="font-size:30px;">True</label>
            <input type="radio" v-model="trueorfalse" name="false" value="false">
            <label for="false" style="font-size:30px;">False</label>
            <br>
            <label for="tftimeLimit">Time Limit:</label>
            <input type="range" step="5" min="10" max="90" id="tftimeLimit">
            <br>

            <b-button  @click="submitTfQuestion">Submit</b-button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shortQuestion: false,
      tfQuestion: false,
      pilih: null,
      question: '',
      answer: '',
      trueorfalse:null
    };
  },
  sockets:{
    connect: function(){
      console.log('socket connected')
    },
    customEmit: function(val){
      console.log('this method fired by socket server. eg: io.emit("customEmit", data)')
    }
  },
  methods: {
    submitSQuestion(){
      console.log("Hello")
      $socket.emit('emit_method', val);
    },
    submitTfQuestion(){
      console.log("Hello")
      $socket.emit('emit_method', val);
    }
  },
  created() {

  }
};
</script>

