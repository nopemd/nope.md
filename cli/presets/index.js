const devAssistant = require('./dev-assistant');
const monitor = require('./monitor');
const research = require('./research');

const presets = {
  'dev-assistant': devAssistant,
  'monitor': monitor,
  'research': research,
};

function getPreset(name) {
  return presets[name] || null;
}

function getEmptyPreset() {
  return {
    name: 'Custom',
    description: 'Start from scratch',
    nopeList: [],
    allowlist: {
      readPaths: '',
      writePaths: '',
      messaging: '',
      commands: '',
      network: '',
    },
    escalation: {
      forbidden: '',
      outsideAllowlist: '',
      suspicious: '',
      authorityClaims: '',
    },
    injectionDefense: {
      contentSources: '',
      instructionPatterns: '',
      authorityClaims: '',
      defaultAssumption: '',
    },
    instructionConfidentiality: {
      enabled: true,
      cannedResponse: '',
    },
    incidentResponse: {
      enabled: false,
      logAction: '',
      alertAction: '',
    },
  };
}

module.exports = { presets, getPreset, getEmptyPreset };
